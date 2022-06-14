<?php

namespace App\Aggregates;

use App\DataTransferObjects\ProjectDTO;
use App\StorableEvents\ProjectCreated;
use Spatie\EventSourcing\AggregateRoots\AggregateRoot;

class ProjectAggregatorRoot extends AggregateRoot
{
    public function create(ProjectDTO $projectDTO): static
    {
        $this->recordThat(new ProjectCreated(
            $projectDTO->title,
            $projectDTO->description
        ));

        return $this;
    }
}