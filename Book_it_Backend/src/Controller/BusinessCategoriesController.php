<?php

namespace App\Controller;

use App\Repository\BusinessCategoriesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/businessCategories')]
final class BusinessCategoriesController extends AbstractController
{
    #[Route(path: '/list', name: 'app_business_categories', methods: ['GET'])]
    public function index(BusinessCategoriesRepository $bcRepository): Response
    {
        $categories = $bcRepository->findAll();
        /*return $this->render('company/index.html.twig', [
            'companies' => $companyRepository->findAll(),
        ]);*/
        return $this->json($categories);
    }
}
