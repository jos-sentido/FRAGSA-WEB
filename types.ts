import React from 'react';

export type ProjectCategory = 'Industrial' | 'Comercial' | 'Residencial';

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;          // "2024" | "2025" | "2026" | "En ejecución" | "En proceso"
  sizeM2: number | null;
  amountMXN: number | null;
  scope?: string;
  clientGroup?: string;
  imageUrl?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  bullets: string[];
  icon: React.ElementType;
}

export interface GroupCompany {
  id: string;
  name: string;
  descriptor: string;
  description: string;
  url?: string;
}

export interface CoverageState {
  code: string;
  name: string;
}

export interface Client {
  name: string;
  category?: string;
}

export interface MachineryCategory {
  title: string;
  description: string;
  icon?: React.ElementType;
}

export interface NavLink {
  path: string;
  label: string;
}

export interface SiblingSite {
  name: string;
  url: string;
  descriptor: string;
}
