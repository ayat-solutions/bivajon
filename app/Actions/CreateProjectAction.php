<?php

namespace App\Actions;

use App\Aggregates\ProjectAggregatorRoot;
use App\DataTransferObjects\ProjectDTO;
use App\Support\Uuid;

class CreateProjectAction
{
    public static function execute(ProjectDTO $projectDTO): string
    {
        ProjectAggregatorRoot::retrieve($uuid = Uuid::new())
            ->create($projectDTO)
            ->persist();

        return $uuid;
    }
}
