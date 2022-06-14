<?php

namespace App\DataTransferObjects;

use App\Http\Requests\ProjectCreatingRequest;

class ProjectDTO
{
    public function __construct(
        public string $title,
        public string $description,
    ) {

    }

    public static function fromProjectCreatingRequest(ProjectCreatingRequest $request): self
    {
        return new self($request->title, $request->description);
    }

}
