<?php

namespace App\Entity;

use App\Repository\OrderRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OrderRepository::class)]
class Order
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private array $description = [];

    #[ORM\Column]
    private ?int $company = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): array
    {
        return $this->description;
    }

    public function setDescription(array $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getCompany(): ?int
    {
        return $this->company;
    }

    public function setCompany(int $company): static
    {
        $this->company = $company;

        return $this;
    }
}
