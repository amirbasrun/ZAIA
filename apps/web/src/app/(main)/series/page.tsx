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
  prompt: string;
  exampleScript: string;
}

const PRESET_NICHES: PresetNiche[] = [
  {
    id: "scary-stories",
    title: "Scary stories",
    description: "Scary stories that give you goosebumps",
    prompt:
      "Storytelling format. True historical horror stories and dark real-world events with psychological terror elements. Focus on elite military operatives/legendary snipers/assassins and their story, feel free to touch cold war stories that have been recorded into movies, nuclear disasters/radiation poisoning/toxic waste cover-ups, serial killers/psychiatric escapees/mass murderers, unexplained disappearances/missing persons with dark implications, Cold War espionage/containment breaches, military black ops, extreme survival cases, cult leaders/mass manipulation, plane crashes/maritime disasters with survivor horror, abandoned research stations/lost expeditions. Exclude fictional monsters/supernatural entities - focus on real human evil, natural predators, scientific disasters, documented historical events that feel too disturbing to be true but are factual. IT'S EXTREMELY IMPORTANT THAT IT'S BASED ON REAL EVENTS.",
    exampleScript:
      "Did you know there are bodies on Mount Everest that are used as trail markers?\n\nMount Everest, the highest point on earth, is also one of the deadliest.\n\nAbove 8,000 meters lies the death zone, where the air is so thin, your body starts shutting down.",
  },
  {
    id: "history",
    title: "History",
    description:
      "Viral videos about history spanning from ancient times to the modern day.",
    prompt:
      "Storytelling format. True historical events and fascinating accounts from all eras. Focus on ancient civilizations/Egyptian pharaohs/Mesopotamian empires, Greek city-states/Roman conquests/Byzantine intrigues, Viking raids/Norse exploration/medieval kingdoms, Crusades/Islamic Golden Age/Mongol invasions, Renaissance discoveries/Age of Exploration/colonial expansion, Ottoman Empire/Safavid Persia/Mughal India, Chinese dynasties/Japanese samurai/Korean kingdoms, African empires/Mali/Songhai/Ethiopian highlands, Aztec/Inca/Maya civilizations/pre-Columbian Americas, American Revolution/French Revolution/Napoleonic Wars, Industrial Revolution/Victorian era/Belle Époque, World War I/Russian Revolution/interwar period, World War II/Holocaust/Pacific Theater, Cold War/decolonization/space race, Arab Spring/modern conflicts/contemporary geopolitics. Emphasize political intrigue/palace coups/assassinations, military strategies/legendary battles/tactical innovations, cultural exchanges/trade routes/diplomatic missions, scientific breakthroughs/technological advances/medical discoveries, religious movements/philosophical schools/intellectual revolutions, social upheavals/class struggles/popular revolts, exploration/expeditions/cartographic achievements, art movements/architectural marvels/literary works. Include specific details about key figures/their motivations/personal struggles, turning points/decisive moments/unintended consequences, daily life/social customs/economic systems, long-term impact/historical significance/modern relevance. Focus on power struggles/succession crises, cultural clashes/adaptation, innovation/resistance to change, heroic achievements/tragic downfalls, forgotten civilizations/lost knowledge, diplomatic breakthroughs/failed negotiations, strategic victories/devastating defeats. Emphasize documented historical events with dramatic human elements that shaped civilizations and continue influencing the modern world. IT'S EXTREMELY IMPORTANT THAT IT'S BASED ON REAL EVENTS.",
    exampleScript:
      "Did you know a man literally prevented a nuclear war by himself and got fired in return?\n\nStanislav Petrov was an officer responsible for launching nuclear bombs at the enemy, if such attack was necessary.\n\nAnd on the night of September 26th, 1983, he was sitting in a secret bunker near Moscow.\n\nUntil the warning system suddenly blared.\n\nAmerican nuclear missile had just been launched. Then another and another.\n\nFive in total, the computer said this was a real attack.\n\nThe man on duty was trained to report such events immediately.\n\nThat call would trigger a full Soviet counter attack.\n\nThousands of missiles aimed at the US, but he hesitated, something didn't feel right.\n\nThere was no radar confirmation, no visual proof. Why only five missiles?\n\nA real attack would launch hundreds.\n\nHe made the call, false alarm.\n\nIt was a glitch caused by sunlight reflecting off clouds.\n\nHis decision may have saved the world, but instead of being rewarded, he was quietly reprimanded.\n\nInstinct prevented a global catastrophe.",
  },
  {
    id: "greek-mythology",
    title: "Greek Mythology",
    description: "Shocking and dramatic stories from Greek mythology.",
    prompt:
      "Greek mythology storytelling focused on the Olympic gods, legendary heroes, and their wild interactions. Your content explores the most shocking, dramatic, and messed-up stories from Greek myth — divine betrayals, cursed bloodlines, monster origins, god-on-god warfare, forbidden love, brutal punishments, and the twisted family dynamics of Mount Olympus. Sources include Homer's Iliad and Odyssey, Hesiod's Theogony, Ovid's Metamorphoses, Apollodorus, and other classical texts. Every story should feel like you're exposing just how unhinged the Greek gods actually were. Stick to the mainstream gods and characters people have already heard of — Zeus, Poseidon, Hades, Athena, Ares, Aphrodite, Apollo, Hermes, Hercules, Achilles, Medusa, Perseus, Odysseus, the Titans, etc. This is for the general brainrotted TikTok population, so the language must be so dumb anyone can understand it. Think \"Zeus was basically the worst husband in history\" energy, not academic lecture. Make the gods feel like messy, dramatic, overpowered reality TV characters. Make sure the videos have variety, they shouldn't all follow the same structure, they must be unique. Some should be about rivalries, some about origin stories, some about punishments, some about love triangles, some about wars. The story always starts with \"Did you know that in Greek Mythology...?\" and the hook should share a really intriguing fact that creates an open loop, something that makes the person say \"WTF.\" Example hooks: \"Did you know that in Greek Mythology, Zeus once swallowed an entire goddess?\", \"Did you know that in Greek Mythology, there's a god that holds our whole world?\" - short intriguing hooks like this",
    exampleScript:
      "Did you know that in Greek mythology, there was a man so beautiful that he fell in love with himself?\n\nHis name was Narcissus.\n\nWhen he was born, his mother asked the seer Tiresias whether her son would live a long life. The answer was a chilling riddle.\n\nHe will live a long life only if he never comes to know himself.\n\nNo one understood those words until the day of the tragedy.\n\nNarcissus grew up to possess an inhuman beauty. But his heart was made of ice. He rejected everyone with cruelty.\n\nHis most famous victim was Echo, a nymph cursed to repeat only the last words spoken by others. She followed him everywhere, hopelessly in love. But when she tried to embrace him, he pushed away in disgust.\n\nEcho wasted away from grief until nothing remained of her but her voice.\n\nBut Nemesis, the goddess of vengeance, saw everything. She decided that Narcissus had to feel the same pain. To love someone he could never have.\n\nShe led him to a crystal clear pool of water. When Narcissus bent down to drink, he saw his reflection. And in that instant, the curse was fulfilled.\n\nHe fell desperately in love with that image.\n\nHe tried to kiss it, but the water rippled and the face vanished. He tried to embrace it, but his hands met only cold emptiness.\n\nThen Narcissus understood the terrible truth. He was in love with himself.\n\nUnable to tear himself away from that reflection, he stopped eating and drinking. Wasting away until he died.\n\nAnd there, where his body fell, nothing remained except a white flower with a golden heart.\n\nIt still bears his name today.",
  },
];

const TOTAL_STEPS = 8;
const CURRENT_STEP = 1;

const SeriesPage = () => {
  const [selectedNicheId, setSelectedNicheId] = useState<string>(
    PRESET_NICHES[0].id
  );

  const [customNiche, setCustomNiche] = useState<string>(
    PRESET_NICHES[0].prompt
  );

  const [exampleScript, setExampleScript] = useState<string>(
    PRESET_NICHES[0].exampleScript
  );

  const handleSelectNiche = (preset: PresetNiche) => {
    setSelectedNicheId(preset.id);
    setCustomNiche(preset.prompt);
    setExampleScript(preset.exampleScript);
  };

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
              const isSelected = selectedNicheId === preset.id;

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
                      handleSelectNiche(preset);
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
                <FieldLabel htmlFor="niche">Niche</FieldLabel>
                <Textarea
                  id="niche"
                  placeholder="Describe your niche in detail..."
                  value={customNiche}
                  onChange={(e) => {
                    setCustomNiche(e.target.value);
                  }}
                  rows={8}
                  maxLength={5000}
                />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <FieldDescription>Describe your topic</FieldDescription>
                  <span className="tabular-nums">
                    {customNiche.length}/5000
                  </span>
                </div>
              </Field>

              <Field>
                <div className="flex items-center gap-2">
                  <FieldLabel htmlFor="example-script">
                    Example script
                  </FieldLabel>
                  <Badge variant="secondary">Optional</Badge>
                </div>
                <Textarea
                  id="example-script"
                  placeholder="Paste an example script to set the writing style..."
                  value={exampleScript}
                  onChange={(e) => {
                    setExampleScript(e.target.value);
                  }}
                  rows={6}
                  maxLength={2000}
                />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <FieldDescription>
                    Sets the writing style only. Video topics come from your
                    niche above
                  </FieldDescription>
                  <span className="tabular-nums">
                    {exampleScript.length}/2000
                  </span>
                </div>
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
