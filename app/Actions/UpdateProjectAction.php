<?php

namespace App\Actions;

use App\Aggregates\ProjectAggregatorRoot;
use App\DataTransferObjects\ProjectDTO;
use App\Support\Uuid;

class UpdateProjectAction
{
    public static function execute(ProjectDTO $projectDTO): string
    {
        ProjectAggregatorRoot::retrieve($uuid = $projectDTO->uuid)
            ->update($projectDTO)
            ->persist();

        return $uuid;
    }
}
