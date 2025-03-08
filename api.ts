export interface Item {
    id: number;
    name: string;
    done: boolean;
  }
  
  export interface List {
    id: number;
    name: string;
    items: Item[];
  }
  
  const API_URL = "http://localhost:3000";
  
  export const getLists = async (): Promise<List[]> => {
    try {
      const response = await fetch(`${API_URL}/lists`);
      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar listas:", error);
      return [];
    }
  };
  
  export const addItemToList = async (listId: number, item: Item): Promise<Item | null> => {
    try {
      const response = await fetch(`${API_URL}/lists/${listId}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      return await response.json();
    } catch (error) {
      console.error("Erro ao adicionar item:", error);
      return null;
    }
  };
  