interface Project {
  id: string;
  name: string;
  student: string;
  challenge: string;
  repo: {
    front: string;
    back: string;
  };
}

export default Project;
