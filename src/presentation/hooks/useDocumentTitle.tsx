import { useEffect, useState } from "react";

const useDocumentTitle = (title?: string | null) => {
  const [document_title, setDoucmentTitle] = useState(title);
  useEffect(() => {
    document.title = document_title ?? "Estiquette";
  }, [document_title]);

  return [document_title, setDoucmentTitle];
};

export { useDocumentTitle };
