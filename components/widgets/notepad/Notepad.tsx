"use client";

import { Textarea } from "@/components/ui/textarea";
import { useWidgetsStore } from "@/store/widgetStore";
import { useEffect, useState } from "react"; // Import useState as well

const Notepad = () => {
  const initialNotepadContent = useWidgetsStore(
    (state) =>
      state.widgets.find((widget) => widget.id === "notepad")?.content || ""
  );

  const [notepadContent, setNotepadContent] = useState(initialNotepadContent);
  const updateWidgetContent = useWidgetsStore(
    (state) => state.updateWidgetContent
  );

  useEffect(() => {
    setNotepadContent(initialNotepadContent);
  }, [initialNotepadContent]);

  const handleNotepadChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNotepadContent(event.target.value);
  };

  useEffect(() => {
    updateWidgetContent("notepad", notepadContent);
  }, [notepadContent, updateWidgetContent]);

  return <Textarea value={notepadContent} onChange={handleNotepadChange} />;
};

export default Notepad;
