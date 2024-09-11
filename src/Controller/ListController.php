<?php

namespace App\Controller;

use App\Entity\Company;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ListController extends AbstractController
{
    /*#[Route('/list', name: 'app_list')]
    public function index(): Response
    {
        return $this->render('list/index.html.twig', [
            'controller_name' => 'ListController',
        ]);
    }*/

    #[Route('/list', name: 'app_list', methods: ['GET', 'POST'])]
    public function connection(EntityManagerInterface $entityManager){
        $list = $entityManager->getRepository(Company::class)->findAll();
        //$list = $entityManager->getRepository(Company::class)->findBy(array('id' => 1));
        return $this->render('list/index.html.twig', [
            'controller_name' => 'Catálogo',
            'companies' => $list
        ]);
    }
}
