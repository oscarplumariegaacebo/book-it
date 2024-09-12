<?php

namespace App\Controller;

use App\Entity\Item;
use App\Form\ItemType;
use App\Repository\ItemRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/item')]
final class ItemController extends AbstractController
{
    #[Route(name: 'app_item_index', methods: ['GET'])]
    public function index(ItemRepository $itemRepository): Response
    {
        return $this->render('item/index.html.twig', [
            'items' => $itemRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_item_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $parameters = json_decode($request->getContent(), true);
        $item = new Item();
        $item->setName($parameters['name']);
        $item->setDescription($parameters['description']);
        $item->setPrice($parameters['price']);
        $item->setTPreparation($parameters['t_preparation']);
        $item->setIngredients($parameters['ingredients']);
        $item->setMeatCooked($parameters['meat_cooked']);
        $item->setIdCompany($parameters['id_company']);

        if ($item) {
            $entityManager->persist($item);
            $entityManager->flush();
        }

        return $this->json($item);
    }

    #[Route('/{id}', name: 'app_item_show', methods: ['GET'])]
    public function show(int $id, ItemRepository $itemRepository): Response
    {
        return $this->json($itemRepository->findBy(array('id' => $id)));
    }

    #[Route('/{id}/edit', name: 'app_item_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Item $item, EntityManagerInterface $entityManager): Response
    {
        $parameters = json_decode($request->getContent(), true);

        $item->setName($parameters['name']);
        $item->setDescription($parameters['description']);
        $item->setPrice($parameters['price']);
        $item->setTPreparation($parameters['t_preparation']);
        $item->setIngredients($parameters['ingredients']);
        $item->setMeatCooked($parameters['meat_cooked']);
        $item->setIdCompany($parameters['id_company']);

        if ($item) {
            $entityManager->persist($item);
            $entityManager->flush();
        }

        return $this->json($item);
    }

    #[Route('/{id}', name: 'app_item_delete', methods: ['POST'])]
    public function delete(Request $request, Item $item, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$item->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($item);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_item_index', [], Response::HTTP_SEE_OTHER);
    }
}
