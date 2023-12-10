<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Techs;
use Illuminate\Http\Request;

class TechsController extends Controller
{
    public function index()
    {
        $techs = Techs::get();
        return $techs;
    }
}
