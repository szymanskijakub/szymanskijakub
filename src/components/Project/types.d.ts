interface Project {
    id: number;
    name: string;
    displayedName: string;
    type: string;
    description: string;
    demos?: ProjectDemo[];
}

interface ProjectDemo {
    name: string;
    url: string;
    github?: string;
}

interface ProjectTypes {
    [key: string]: string;
    commercial: "commercial project",
    nonCommercial:"non-commercial project"
}