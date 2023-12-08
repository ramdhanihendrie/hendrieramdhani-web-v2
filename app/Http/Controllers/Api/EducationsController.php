<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Educations;
use Illuminate\Http\Request;

class EducationsController extends Controller
{
    public function index()
    {
        $educations = Educations::get();
        return $educations;
    }
}
