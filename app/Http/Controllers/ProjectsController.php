<?php

namespace App\Http\Controllers;

use App\Actions\CreateProjectAction;
use App\DataTransferObjects\ProjectDTO;
use App\Http\Requests\ProjectCreatingRequest;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    public function index()
    {
        return Inertia::render('Project/index', [
            'projects' => Project::all(),
        ]);
    }

    public function show(Project $project)
    {
        return Inertia::render('Project/Details', [
            'project' => $project,
        ]);
    }

    public function store(ProjectCreatingRequest $projectCreatingRequest)
    {
        $projectUuid = CreateProjectAction::execute(
            ProjectDTO::fromProjectCreatingRequest($projectCreatingRequest)
        );

        return redirect()->route('projects.index');
    }
}
