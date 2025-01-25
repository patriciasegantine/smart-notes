import React from "react";
import { useNotes } from "@/context/NotesContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";

export const NotesGrid: React.FC = () => {
  const {notes} = useNotes();
  
  return (
    <div className="flex flex-col p-6 space-y-6">
      <div
        className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {notes.map(({title, content}) => (
          <Card className="relative flex flex-col justify-between h-full dark:bg-neutral-900">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            </CardHeader>
            
            <CardContent>
              {content}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
