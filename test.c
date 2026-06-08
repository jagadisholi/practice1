#include<stdio.h>
#include<stdlib.h>

struct Node
{
    int data;
    struct Node *next;
};

struct Node *head = NULL;

// INSERT AT END
void insertEnd(int value)
{
    struct Node *newnode, *temp;

    newnode = (struct Node*)malloc(sizeof(struct Node));
    newnode->data = value;
    newnode->next = NULL;

    if (head == NULL)
    {
        head = newnode;
    }
    else
    {
        temp = head;
        while (temp->next != NULL)
        {
            temp = temp->next;
        }
        temp->next = newnode;
    }
    printf("%d inserted at end\n", value);
}

// DELETE AT END
void deleteEnd()
{
    struct Node *temp, *prev;
    if (head == NULL)
    {
        printf("Linked List is Empty\n");
    }
    else if (head->next == NULL)
    {
        printf("%d deleted from end\n", head->data);
        free(head);
        head = NULL;
    }
    else
    {
        temp = head;
        while (temp->next != NULL)
        {
            prev = temp;
            temp = temp->next;
        }
        prev->next = NULL;
        printf("%d deleted from end\n", temp->data);
        free(temp);
    }
}

// DISPLAY
void display()
{
    struct Node *temp;
    temp = head;
    printf("Linked List:\n");
    while (temp != NULL)
    {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\n");
}

int main()
{
    int choice, value;

    while (1)
    {
        printf("\n1. Insert at End\n");
        printf("2. Delete at End\n");
        printf("3. Display\n");
        printf("4. Exit\n");

        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1:
                printf("Enter value:");
                scanf("%d", &value);
                insertEnd(value);
                break;

            case 2:
                deleteEnd();
                break;

            case 3:
                display();
                break;

            case 4:
                return 0;

            default:
                printf("Invalid Choice\n");
        }
    }
    return 0;
}
