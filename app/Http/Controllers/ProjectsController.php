<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectCreatingRequest;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    public function index()
    {
        return Inertia::render('Project/index');
    }

    public function show(Project $project)
    {
        return Inertia::render('Project/Details', [
            'project' => $project,
        ]);
    }

    public function store(ProjectCreatingRequest $project)
    {

        return Inertia::render('Project/index', [
            'project' => $project,
        ]);
    }
}
