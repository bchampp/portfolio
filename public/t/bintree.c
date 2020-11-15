//Drew Cooper B00811386 bintree.c from lab 6 
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "bintree.h"

BinaryTree* bintree_initialize(int typeSize, char* typeName,int (*compFunction)(void*, void*), void (*printFunction)(void*)){
    //creates a BT 
    BinaryTree* bt = malloc(sizeof(*bt));

    //if bt is null, return null
    if(bt==NULL){
        return NULL;
    }

    //init information for the tree 
    bt->top = NULL;
    bt->itemSize = typeSize;
    bt->type = malloc(strlen(typeName));
    strcpy(bt->type, typeName);
    //need to determine how to init the function pointers 
    bt->compare = compFunction;
    bt->print=printFunction;
    return bt;
}
BinaryTreeNode* bintree_create_node(int typeSize, void* element){
    BinaryTreeNode* node = malloc(sizeof(*node));
    if (node == NULL){
        return NULL;
    }
    node->data=malloc(typeSize);
    memcpy(node->data, element, typeSize);
    node->left = NULL;
    node->right = NULL;
    return node;
}
bool bintree_insert(BinaryTree* tree, void* element){
    // If the tree or element are NULL, return false.
	if(tree == NULL || element == NULL)
		return false;
	
	// If top is NULL, make a node and store it in top.
	if(tree->top == NULL)
	{
		// Create a node and store it in top.
		tree->top = bintree_create_node(tree->itemSize, element);

		// If we could not create the node, return false.
		if(tree->top == NULL)
			return false;

		// We've created a node. Return true.
		return true;
	}
	else
	{
		// If there is a root node, we can recurse on it and return the result.
		return _bintree_insert_recursive(tree, tree->top, element);	
	}


    
}
bool bintree_search(BinaryTree* tree, void* element)
{
	if(tree == NULL || element == NULL)
		return false;
	
	return _bintree_search_recursive(tree, tree->top, element);
}

void bintree_print_in_order(BinaryTree* tree)
{
	if(tree == NULL || tree->top == NULL)
		return;

	_bintree_in_order_recursive(tree, tree->top);
}

void bintree_print_pre_order(BinaryTree* tree)
{
	if(tree == NULL || tree->top == NULL)
		return;

	_bintree_pre_order_recursive(tree, tree->top);
}

void bintree_print_post_order(BinaryTree* tree)
{
	if(tree == NULL || tree->top == NULL)
		return;

	_bintree_post_order_recursive(tree, tree->top);
}

void bintree_print_reverse_order(BinaryTree* tree)
{
	if(tree == NULL || tree->top == NULL)
		return;

	_bintree_reverse_order_recursive(tree, tree->top);
}

bool _bintree_insert_recursive(BinaryTree* tree, BinaryTreeNode* node, void* element)
{
	// 1. Compare the node data and the element.
	// 		a. If E <= D, check left.
	// 		b. If  E > D, check right.
	// 2. If checking left and left is null, make a new node and insert.
	//    Otherwise recurse on left.
	// 3. If checking right and right is null, make a new node and insert.
	//    Otherwise recurse on right.
	
	if( tree->compare(node->data, element) < 0 )
	{
		if(node->left == NULL)
		{
			node->left = bintree_create_node(tree->itemSize, element);
			
			if(node->left == NULL)
				return false;

			return true;
		}
		else
		{
			return _bintree_insert_recursive(tree, node->left, element);
		}
	}
	else
	{
		if(node->right == NULL)
		{
			node->right = bintree_create_node(tree->itemSize, element);
			
			if(node->right == NULL)
				return false;

			return true;
		}
		else
		{
			return _bintree_insert_recursive(tree, node->right, element);
		}
	}
}

bool _bintree_search_recursive(BinaryTree* tree, BinaryTreeNode* node, void* element)
{
	// Compare the node data and the element:
	// 		a. If they are equal, return true.
	// 		b. If E < D, check left. If left is NULL, return false. Otherwise recurse.
	// 		c. If E > D, check right. If right is NULL, return false. Otherwise recurse.
	
	int comp = tree->compare(node->data, element);

	if( comp == 0 )
		return true;
	else if( comp < 0 )
		if(node->left == NULL)
			return false;
		else
			return _bintree_search_recursive(tree, node->left, element);
	else if( comp > 0 )
		if(node->right == NULL)
			return false;
		else
			return _bintree_search_recursive(tree, node->right, element);
}

void _bintree_in_order_recursive(BinaryTree* tree, BinaryTreeNode* node)
{
	// Traverse to the Left.
	if(node->left != NULL)
		_bintree_in_order_recursive(tree, node->left);
	
	// Print the current node's data.
	tree->print(node->data);

	// Traverse to the Right.
	if(node->right != NULL)
		_bintree_in_order_recursive(tree, node->right);
}

void _bintree_pre_order_recursive(BinaryTree* tree, BinaryTreeNode* node)
{	
	// Print the current node's data.
	tree->print(node->data);

	// Traverse to the Left.
	if(node->left != NULL)
		_bintree_pre_order_recursive(tree, node->left);
	
	// Traverse to the Right.
	if(node->right != NULL)
		_bintree_pre_order_recursive(tree, node->right);
}

void _bintree_post_order_recursive(BinaryTree* tree, BinaryTreeNode* node)
{
	// Traverse to the Left.
	if(node->left != NULL)
		_bintree_post_order_recursive(tree, node->left);

	// Traverse to the Right.
	if(node->right != NULL)
		_bintree_post_order_recursive(tree, node->right);
	
	// Print the current node's data.
	tree->print(node->data);
}

void _bintree_reverse_order_recursive(BinaryTree* tree, BinaryTreeNode* node)
{	
	// Traverse to the Right.
	if(node->right != NULL)
		_bintree_reverse_order_recursive(tree, node->right);

	// Print the current node's data.
	tree->print(node->data);

	// Traverse to the Left.
	if(node->left != NULL)
		_bintree_reverse_order_recursive(tree, node->left);
}

//new functions added for lab7
void bintree_print_breadth_frist(BinaryTree* bt){
    
}
void bintree_print_depth_first(BinaryTree* bt){
    BinaryTreeNode* btNode = bintree_create_node(bt->itemSize, bt->top->data);
    if (bt == NULL){
        return NULL;
    }else{
        _bintree(bintree_print_depth_recursive(bt, bt->top));
    }
}

void _bintree_print_dfs_recursive(BinaryTree* bt, BinaryTreeNode* btNode){
    if (btNode->left != NULL){
        bt->print(btNode->data);
        _bintree_print_dfs_recursive(bt, btNode->left);
    }
    if (btNode->right != NULL){
        bt->print(btNode->data);
        _bintree_print_dfs_recursive(bt, btNode->right);
    }
}

void _bintree_print_bfs_recursive(BinaryTree* tree, BinaryTreeNode* node){
    
}
bool bintree_insert_replace(BinaryTree* bt, void* data){
    return true;
}
bool _bintree_insert_replace_recursive(BinaryTree* bt, BinaryTreeNode* element, void* data){
    return true;
}