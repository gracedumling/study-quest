<?php

namespace App\Http\Controllers;

use App\Models\leaderboards;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LeaderboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        
        // Get normal mode leaderboard
        $normalLeaderboard = $this->getLeaderboardData('normal');
        
        // Get sudden death mode leaderboard
        $suddenDeathLeaderboard = $this->getLeaderboardData('suddenDeath');
        
        // Get user's rank in normal mode
        $userRankNormal = $this->getUserRank($user->id, 'normal');
        
        // Get user's rank in sudden death mode
        $userRankSuddenDeath = $this->getUserRank($user->id, 'suddenDeath');
        
        return Inertia::render('leaderboard', [
            'normalLeaderboard' => $normalLeaderboard,
            'suddenDeathLeaderboard' => $suddenDeathLeaderboard,
            'userRankNormal' => $userRankNormal,
            'userRankSuddenDeath' => $userRankSuddenDeath,
            'activeMode' => 'normal'
        ]);
    }
    
    private function getLeaderboardData($gameMode)
    {
        return leaderboards::where('game_mode', $gameMode)
            ->orderBy('score', 'desc')
            ->limit(20)
            ->get()
            ->map(function ($entry) {
                $user = User::find($entry->user_id);
                return [
                    'user' => $user ? $user->name : 'Unknown Player',
                    'score' => $entry->score,
                    'level' => $entry->level_reached,
                    'streak' => $entry->max_streak,
                    'collectibles' => $entry->collectibles_earned,
                    'date' => $entry->created_at->format('M d, Y')
                ];
            });
    }
    
    private function getUserRank($userId, $gameMode)
    {
        // Get user's score
        $userScore = leaderboards::where('user_id', $userId)
            ->where('game_mode', $gameMode)
            ->orderBy('score', 'desc')
            ->first();
            
        if (!$userScore) {
            return [
                'rank' => null,
                'score' => null,
                'total' => leaderboards::where('game_mode', $gameMode)->count()
            ];
        }
        
        // Count players with higher score
        $rank = leaderboards::where('game_mode', $gameMode)
            ->where('score', '>', $userScore->score)
            ->count() + 1; // Add 1 because ranks start at 1
            
        return [
            'rank' => $rank,
            'score' => $userScore->score,
            'total' => leaderboards::where('game_mode', $gameMode)->count()
        ];
    }
}