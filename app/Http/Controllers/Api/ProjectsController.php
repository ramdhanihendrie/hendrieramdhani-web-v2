<?php

namespace App\Http\Controllers\Api;

use App\Models\Projects;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;

class ProjectsController extends Controller
{
    public function index()
    {
        $projects = Projects::get();
        return $projects;
    }
}
