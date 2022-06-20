<?php

namespace App\Http\Controllers;

use App\Actions\CreateProjectAction;
use App\Actions\DeleteProjectAction;
use App\Actions\UpdateProjectAction;
use App\DataTransferObjects\ProjectDTO;
use App\Http\Requests\ProjectCreatingRequest;
use App\Http\Requests\ProjectUpdatingRequest;
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

        return redirect()->intended(route('projects.index'));
    }

    public function update(Project $project, ProjectUpdatingRequest $projectUpdatingRequest)
    {
        $projectUuid = UpdateProjectAction::execute(
            ProjectDTO::fromProjectUpdatingRequest($projectUpdatingRequest, $project)
        );

        return redirect()->intended(route('projects.index'));
    }

    public function destroy(Project $project)
    {
        $projectUuid = DeleteProjectAction::execute($project);

        return redirect()->intended(route('projects.index'));
    }
}
