"use client";

import { Badge } from "@study/ui/components/badge";
import { Button } from "@study/ui/components/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@study/ui/components/field";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@study/ui/components/tabs";
import { Textarea } from "@study/ui/components/textarea";
import { cn } from "@study/ui/lib/utils";
import { Check, ChevronRight, Layers, PenLine } from "lucide-react";
import { useState } from "react";

interface PresetNiche {
  id: string;
  title: string;
  description: string;
}

const PRESET_NICHES: PresetNiche[] = [
  {
    id: "scary-stories",
    title: "Scary stories",
    description: "Scary stories that give you goosebumps",
  },
  {
    id: "history",
    title: "History",
    description:
      "Viral videos about history spanning from ancient times to the modern day.",
  },
  {
    id: "greek-mythology",
    title: "Greek Mythology",
    description: "Shocking and dramatic stories from Greek mythology.",
  },
  {
    id: "historical-figures",
    title: "Historical Figures",
    description:
      "Life story in one minute videos about the most important historical figures.",
  },
  {
    id: "true-crime",
    title: "True Crime",
    description: "Viral videos about true crime stories.",
  },
  {
    id: "stoic-motivation",
    title: "Stoic Motivation",
    description: "Viral videos about stoic philosophy and life lessons.",
  },
  {
    id: "good-morals",
    title: "Good morals",
    description:
      "Viral videos that teach people good morals and life lessons.",
  },
  {
    id: "children-stories",
    title: "Children stories",
    description:
      "Heartwarming animal stories with a lesson, perfect for kids.",
  },
];

const TOTAL_STEPS = 8;
const CURRENT_STEP = 1;

const SeriesPage = () => {
  const [selectedNiche, setSelectedNiche] = useState<string>("scary-stories");
  const [customNiche, setCustomNiche] = useState<string>("");

  return (
    <div className="flex w-full flex-col gap-6 py-2">
      {/* Step Indicator Progress Bar */}
      <div className="flex w-full items-center gap-2" aria-hidden="true">
        {Array.from({ length: TOTAL_STEPS }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors",
              index < CURRENT_STEP ? "bg-primary" : "bg-muted"
            )}
          />
        ))}
      </div>

      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Choose your niche
          </h1>
          <Badge variant="secondary">
            Step {CURRENT_STEP} of {TOTAL_STEPS}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Select a preset or describe your own niche
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="presets" className="w-full">
        <div className="border-b border-border">
          <TabsList variant="line">
            <TabsTrigger value="presets">
              <Layers data-icon="inline-start" />
              <span>Presets</span>
            </TabsTrigger>
            <TabsTrigger value="custom">
              <PenLine data-icon="inline-start" />
              <span>Custom</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Presets Tab Content */}
        <TabsContent value="presets">
          <div className="flex flex-col gap-3 pt-2">
            {PRESET_NICHES.map((preset) => {
              const isSelected = selectedNiche === preset.id;

              return (
                <label
                  key={preset.id}
                  className={cn(
                    "flex cursor-pointer items-start justify-between rounded-xl border p-4 transition-colors",
                    isSelected
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:bg-muted/40"
                  )}
                >
                  <input
                    type="radio"
                    name="niche-preset"
                    value={preset.id}
                    checked={isSelected}
                    onChange={() => {
                      setSelectedNiche(preset.id);
                    }}
                    className="sr-only"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-foreground">
                      {preset.title}
                    </span>
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      {preset.description}
                    </span>
                  </div>
                  {isSelected && <Check className="size-4 text-primary" />}
                </label>
              );
            })}
          </div>
        </TabsContent>

        {/* Custom Tab Content */}
        <TabsContent value="custom">
          <div className="pt-2">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="custom-niche">Custom Niche</FieldLabel>
                <Textarea
                  id="custom-niche"
                  placeholder="Describe your niche in detail (e.g. Scary stories that give you goosebumps, mysteries of ancient civilizations...)"
                  value={customNiche}
                  onChange={(e) => {
                    setCustomNiche(e.target.value);
                  }}
                  rows={4}
                />
                <FieldDescription>
                  Provide details about topics, tone, and audience for your
                  series.
                </FieldDescription>
              </Field>
            </FieldGroup>
          </div>
        </TabsContent>
      </Tabs>

      {/* Action Footer */}
      <div className="flex justify-end pt-2">
        <Button size="lg">
          Continue
          <ChevronRight data-icon="inline-end" />
        </Button>
      </div>
    </div>
  );
};

export default SeriesPage;
