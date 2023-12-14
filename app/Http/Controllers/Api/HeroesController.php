<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Hero;
use Illuminate\Http\Request;

class HeroesController extends Controller
{
    public function index()
    {
        $hero = Hero::first();
        return $hero;
    }
}
