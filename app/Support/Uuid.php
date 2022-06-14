<?php

namespace App\Support;

class Uuid
{
    public static function new(): string
    {
        return \Ramsey\Uuid\Uuid::uuid4()->toString();
    }
}
