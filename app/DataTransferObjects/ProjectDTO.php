<?php

namespace App\DataTransferObjects;

use App\Http\Requests\ProjectCreatingRequest;
use App\Http\Requests\ProjectUpdatingRequest;
use App\Models\Project;
use App\Support\Uuid;

class ProjectDTO
{
    public function __construct(
        public string $uuid,
        public string $title,
        public string $description,
    ) {

    }

    public static function fromProjectCreatingRequest(ProjectCreatingRequest $request): self
    {
        return new self(Uuid::new(), $request->title, $request->description);
    }

    public static function fromProjectUpdatingRequest(ProjectUpdatingRequest $request, Project $project): self
    {
        return new self($project->uuid, $request->title, $request->description);
    }
}
