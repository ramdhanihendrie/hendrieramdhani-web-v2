<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Certificates;
use App\Models\Educations;
use App\Models\Hero;
use App\Models\Projects;
use App\Models\Techs;
use Illuminate\Http\Request;

class LandingController extends Controller
{
    public function index()
    {
        $hero = Hero::first();
        $educations = Educations::get();
        $certificates = Certificates::get();
        $projects = Projects::get();
        $techs = Techs::get();

        return response()->json([
            "hero" => $hero,
            "educations" => $educations,
            "certificates" => $certificates,
            "projects" => $projects,
            "techs" => $techs,
        ]);
    }
}
