<?php

namespace App\Actions;

use App\Aggregates\ProjectAggregatorRoot;
use App\DataTransferObjects\ProjectDTO;
use App\Models\Project;
use App\Support\Uuid;

class DeleteProjectAction
{
    public static function execute(Project $project): string
    {
        ProjectAggregatorRoot::retrieve($uuid = $project->uuid)
            ->delete($project)
            ->persist();

        return $uuid;
    }
}
