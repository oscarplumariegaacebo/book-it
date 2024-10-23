<?php

namespace App\Controller;

use App\Entity\Company;
use App\Form\CompanyType;
use App\Repository\CompanyRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/company')]
final class CompanyController extends AbstractController
{
    #[Route(path: '/list', methods: ['GET'])]
    public function index(CompanyRepository $companyRepository): Response
    {
        $companies = $companyRepository->findAll();
        /*return $this->render('company/index.html.twig', [
            'companies' => $companyRepository->findAll(),
        ]);*/
        return $this->json($companies);
    }

    #[Route(path: '/listByCategory/{id}', methods: ['GET'])]
    public function companiesByCategory(int $id, CompanyRepository $companyRepository): Response
    {
        $companies = $companyRepository->findBy(array('category' => $id));
        /*return $this->render('company/index.html.twig', [
            'companies' => $companyRepository->findAll(),
        ]);*/
        return $this->json($companies);
    }

    #[Route(path: '/getIdCompanyByName/{name}', methods: ['GET'])]
    public function idByName(string $name, CompanyRepository $companyRepository): Response
    {
        $company = $companyRepository->findBy(array('name' => $name));
        /*return $this->render('company/index.html.twig', [
            'companies' => $companyRepository->findAll(),
        ]);*/
        return $this->json($company[0]->getId());
    }

    #[Route('/new', name: 'app_company_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $company = new Company();
        $form = $this->createForm(CompanyType::class, $company);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($company);
            $entityManager->flush();

            return $this->redirectToRoute('app_company_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('company/new.html.twig', [
            'company' => $company,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_company_show', methods: ['GET'])]
    public function show(Company $company): Response
    {
        /*return $this->render('company/show.html.twig', [
            'company' => $company,
        ]);*/
        return $this->json($company);
    }

    #[Route('/{id}/edit', name: 'app_company_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Company $company, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(CompanyType::class, $company);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_company_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('company/edit.html.twig', [
            'company' => $company,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_company_delete', methods: ['POST'])]
    public function delete(Request $request, Company $company, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$company->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($company);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_company_index', [], Response::HTTP_SEE_OTHER);
    }
}
