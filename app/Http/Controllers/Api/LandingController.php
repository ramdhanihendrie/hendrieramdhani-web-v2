<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Certificates;
use App\Models\Educations;
use App\Models\Hero;
use App\Models\Projects;
use App\Models\Section;
use App\Models\SocialMedia;
use App\Models\Techs;
use Illuminate\Http\Request;

class LandingController extends Controller
{
    public function index()
    {
        $hero = Hero::first();
        $educations = Educations::all();
        $certificates = Certificates::all();
        $projects = Projects::all();
        $techs = Techs::all();
        $sections = Section::all();
        $social_media = SocialMedia::all();

        return response()->json([
            "hero" => $hero,
            "about" => [
                "title" => $sections[0]->title,
                "description" => $sections[0]->description,
                "techList" => $techs,
            ],
            "education" => [
                "title" => $sections[1]->title,
                "description" => $sections[1]->description,
                "educationList" => $educations,
            ],
            "certificate" => [
                "title" => $sections[2]->title,
                "description" => $sections[2]->description,
                "certificateList" => $certificates,
            ],
            "project" => [
                "title" => $sections[3]->title,
                "description" => $sections[3]->description,
                "projectList" => $projects,
            ],
            "socialMedia" => $social_media,
        ]);
    }
}
