export const getPriorityClass = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'text-red-600 font-bold';
    case 'Medium':
      return 'text-yellow-600 font-bold';
    case 'Low':
      return 'text-green-600 font-bold';
  }
};
