import { createInterface } from "readline";
import { Book } from "./book";
import Library from "./library";
import { Author } from "./author";
import { isValidCategory, bookCategories } from "./types";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

export default class Menu {
    library = new Library();
    authors: Author[] = [];

    constructor() {
        console.clear();
        this.showMainMenu();
    }

    showMainMenu(): void {
        console.log("---- Main Menu ----");
        console.log("1. Livres");
        console.log("2. Utilisateurs");
        console.log("3. Quitter");

        this.getUserInput("Veuillez choisir une option : ", (input: string) => {
            this.handleChoice(input);
        });
    }

    getUserInput(prompt: string, callback: (input: string) => void): void {
        rl.question(prompt, (input: string) => {
            callback(input);
        });
    }

    handleChoice(choice: string): void {
        switch (choice) {
            case "1":
                console.clear();
                this.showBooksMenu();
                break;
            case "2":
                console.clear();
                this.showUsersMenu();
                break;
            case "3":
                console.log("Quitter...");
                rl.close();
                break;
            default:
                console.clear();
                console.log("❌ Option invalide, 1,2 ou 3 seulement.");
                this.showMainMenu();
                break;
        }
    }

    showBooksMenu(): void {
        console.log("---- Menu des Livres ----");
        console.log("1. Lister les livres");
        console.log("2. Ajouter un livre");
        console.log("3. Retour au menu principal");

        this.getUserInput("Veuillez choisir une option : ", (input: string) => {
            this.handleBooksChoice(input);
        });
    }

    showUsersMenu(): void {
        console.log("---- Menu des Utilisateurs ----");
        console.log("1. Lister les utilisateurs");
        console.log("2. Ajouter un utilisateur");
        console.log("3. Retour au menu principal");

        this.getUserInput("Veuillez choisir une option : ", (input: string) => {
            this.handleUsersChoice(input);
        });
    }

    handleBooksChoice(choice: string): void {
        console.clear();
        switch (choice) {
            case "1":
                const availableBooks = this.library.listAvailable();

                if (availableBooks.length !== 0) {
                    availableBooks.forEach(book => {
                        console.log(`- "${book.title}" by ${book?.author?.name}`);
                    });
                } else {
                    console.log("Aucun livre disponible.\n");
                }
                this.showBooksMenu();
                break;
            case "2":
                this.getUserInput("Entrée le titre du livre : ", (input: string) => {
                    this.handletitleBook(input);
                });
                break;
            case "3":
                this.showMainMenu();
                break;
            default:
                console.log("❌ Option invalide, 1,2 ou 3 seulement.");
                this.showMainMenu();
                break;
        }
    }

    handleUsersChoice(choice: string): void {
        console.clear();
        switch (choice) {
            case "1":
                if (this.authors.length !== 0) {
                    this.authors.forEach(user => {
                        console.log(`${user.id} - "${user.name}"`);
                    });
                } else {
                    console.log("Aucun author disponible.\n");
                }
                this.showUsersMenu();
                break;
            case "2":
                break;
            case "3":
                this.showMainMenu();
                break;
            default:
                console.clear();
                console.log("❌ Option invalide, 1,2 ou 3 seulement.");
                this.showMainMenu();
                break;
        }
    }

    handletitleBook(title: string): void {
        const book: Book = {
            id: this.library.listAvailable().length + 1,
            title: title,
            author: undefined,
            available: true,
            categories: []
        };

        this.getUserInput("Entrée le nom de l'auteur du livre : ", (input: string) => {
            this.handleAuthorBook(input, book);
        });
    }

    handleAuthorBook(id_author: string, book: Book): void {

        const author = this.authors.find(a => a.name.toLowerCase() === id_author.toLowerCase());
        if (!author) {
            console.log("Auteur non trouvé. Livre non ajouté.\n Créez d'abord l'auteur.");
            this.showBooksMenu();
            return;
        }
        book.author = author;

        this.getUserInput("Entrée la catégorie du livre : (" + bookCategories.join(", ") + ")\n", (input: string) => {
            this.handleCategoryBook(input, book);
        });
    }

    handleCategoryBook(category: string, book: Book): void {

        if (!isValidCategory(category)) {
            console.log("Catégorie invalide. Livre non ajouté.");
        } else {
            book.categories.push(category);
            this.library.addBook(book);
            console.log(`Livre "${book.title}" ajouté avec succès!\n`);
        }

        this.showBooksMenu();
    }
}