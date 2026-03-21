export interface ICreateCategory {
  name: string;
  description: string;
  priority: number;
  status: string;
  isDefault: boolean;
  imageLink: string;
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
  priority: number;
  status: string;
  isDefault: boolean;
  imageLink: string;
}
