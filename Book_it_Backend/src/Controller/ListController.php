<?php

namespace App\Controller;

use App\Entity\Item;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ListController extends AbstractController
{
    #[Route('/list', name: 'app_list')]
    public function index(): Response
    {
        return $this->render('list/index.html.twig', [
            'controller_name' => 'ListController',
        ]);
    }

    #[Route('/list/{id}', methods: ['GET', 'POST'])]
    public function itemsCompany(EntityManagerInterface $entityManager, int $id): Response{
        $list = $entityManager->getRepository(Item::class)->findBy(array('idCompany' => $id));
        return $this->json($list);
    }
}
