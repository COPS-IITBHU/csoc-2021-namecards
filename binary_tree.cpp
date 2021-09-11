#include <iostream>
#include <queue>
using namespace std;
#pragma pack(1)
struct node
{
    int data;
    struct node *left;
    struct node *right;
};

struct node *insert_elem(struct node *r, struct node *p)
{
    struct node *parent, *q = r;
    if (r == NULL)
    {
        r = p;
        return r;
    }
    while (q != NULL)
    {
        parent = q;
        if (q->data < p->data)
            q = q->right;
        else if (q->data > p->data)
            q = q->left;
    }
    if (parent->data < p->data)
        parent->right = p;
    else
        parent->left = p;
    return r;
}

void inorder(struct node *root)
{
    if (root->left != NULL)
        inorder(root->left);
    cout << root->data << " ";
    if (root->right != NULL)
        inorder(root->right);
}
void preorder(struct node *root)
{
    cout << "hi"<<root->data << " ";
    if (root->left != NULL)
        preorder(root->left);
    if (root->right != NULL)
        preorder(root->right);
}
void postorder(struct node *root)
{
    if (root->left != NULL)
        postorder(root->left);
    if (root->right != NULL)
        postorder(root->right);
    cout << root->data << " ";
}
void level_order(node *root)
{
	// Base Case
	if (root == NULL) return;

	// Create an empty queue for level order traversal
	queue<node *> q;

	// Enqueue Root and initialize height
	q.push(root);
    q.push(NULL);
    int sum=0;

	while (q.empty() == false)
	{   if(q.front()==NULL){
        cout<<sum<<" ";
        sum=0;
    }
		// Print front of queue and remove it from queue
		node *node = q.front();
		sum+=node->data;
		q.pop();

		/* Enqueue left child */
		if (node->left != NULL)
			q.push(node->left);

		/*Enqueue right child */
		if (node->right != NULL)
			q.push(node->right);

        else if(!q.empty())
        q.push(NULL);
	}
}
  
int height(struct node *root)
{
    if (root == NULL)
        return 0;
    return max(height(root->left), height(root->right)) + 1;
}

struct node* find_min(struct node*root){
    if(root->left==NULL)
    return root;
    return find_min(root->left);
}

struct node *Delete(struct node *root, int val)
{
    if (root == NULL)
        return root;
    else if (root->data > val)
        root->left = Delete(root->left, val);
    else if (root->data < val)
        root->right = Delete(root->right, val);
    else
    {
        //Case1:
        if (root->left == NULL && root->right==NULL)
        {
            delete(root);
            root=NULL;
        }
        else if(root->left=NULL)
        {
            struct node*temp=root;
            root=root->right;
            delete(temp);
        }
         else if(root->right=NULL)
        {
            struct node*temp=root;
            root=root->left;
            delete(temp);
        }
        else{
            struct node*temp=find_min(root->right);
            root->data=temp->data;
            root->right=Delete(root->right,temp->data);
        }
    }
            return root;
}

int search(int inorder[],int start,int end,int current){
    for(int i=start;i<end;i++){
        if(inorder[i]==current)
        return i;
    }
    return 0;
}

node *build_tree(int postorder[],int inorder[],int start,int end){

    static int idx=5;
    int current=postorder[idx--];
    node *curr;
    curr->left=NULL;
    curr->right=NULL;
    curr->data=current;
    if(start==end)
    return curr;
    int pos=search(inorder,start,end,current);
    curr->right=build_tree(postorder,inorder,pos+1,end);
    curr->left=build_tree(postorder,inorder,start,pos-1);
return curr;
}
int main()
{
    printf("Inserting Data in a Binary Search Tree");
    struct node *root, *p;
    root = NULL;
    int n, k;
    while (1)
    {
        printf("\nDo you wish to input data in the BST? Enter 1 for Yes, and any other key for No: ");
        scanf("%d", &k);
        if (k == 1)
        {
            printf("\nEnter the key value: ");
            scanf("%d", &n);
            p = (struct node *)malloc(sizeof(struct node));
            p->data = n;
            p->left = NULL;
            p->right = NULL;
            root = insert_elem(root, p);
            level_order(root);
        }
        else
            break;
    }
/*
    int val;cin>>val;
    Delete(root,val);
    preorder(root);
    int postorder[]={1,2,3,5,4,6};
     int inorder[]={2,3,1,6,4,5};
     node *tree=build_tree(postorder,inorder,0,5);
     preorder(tree);*/

    return 0;
}
