"use client";

import {
  CardBody3D,
  CardContainer3D,
  CardItem3D,
} from "@/components/aceternity/3d-card";
import { AuroraBackground } from "@/components/aceternity/aurora-background";
import { MovingBorder } from "@/components/aceternity/moving-border";
import { FadeIn } from "@/components/motion/fade-in";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/stagger-container";
import { AnimatedButton } from "@/components/react-bits/animated-button";
import { AnimatedCard } from "@/components/react-bits/animated-card";
import { AnimatedInput } from "@/components/react-bits/animated-input";
import { Badge } from "@/components/react-bits/badge";
import { EmptyState } from "@/components/react-bits/empty-state";
import { ProgressBar } from "@/components/react-bits/progress-bar";
import { SearchInput } from "@/components/react-bits/search-input";
import { CardSkeleton } from "@/components/react-bits/skeleton";
import { useToast } from "@/components/react-bits/toast-provider";
import { Toggle } from "@/components/react-bits/toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Sparkles, Star } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [toggleValue, setToggleValue] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const { showToast } = useToast();

  const handleShowToast = (type: "success" | "error" | "info") => {
    showToast({
      type,
      title:
        type === "success" ? "Success!" : type === "error" ? "Error" : "Info",
      message: `This is a ${type} toast notification with auto-dismiss.`,
    });
  };

  return (
    <div className="flex flex-col gap-20 py-12">
      {/* Hero Section with Aurora Background */}
      <AuroraBackground className="h-screen">
        <FadeIn className="text-center space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Welcome to LuxeGlow
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Experience luxury beauty treatments with stunning UI components
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MovingBorder as="button" className="font-semibold">
              Explore Components
            </MovingBorder>
            <AnimatedButton variant="outline" size="lg">
              Learn More
            </AnimatedButton>
          </div>
        </FadeIn>
      </AuroraBackground>

      {/* Buttons Section */}
      <section className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Button Variants
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <AnimatedButton>Default Button</AnimatedButton>
            <AnimatedButton variant="secondary">Secondary</AnimatedButton>
            <AnimatedButton variant="outline">Outline</AnimatedButton>
            <AnimatedButton variant="ghost">Ghost</AnimatedButton>
            <AnimatedButton variant="destructive">Destructive</AnimatedButton>
            <AnimatedButton size="sm">Small</AnimatedButton>
            <AnimatedButton size="lg">Large</AnimatedButton>
          </div>
        </FadeIn>
      </section>

      {/* Form Inputs Section */}
      <section className="container mx-auto px-4 max-w-2xl">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Form Components
          </h2>
          <div className="space-y-6">
            <AnimatedInput
              label="Your Name"
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputValue(e.target.value);
                setInputError("");
              }}
              error={inputError}
            />
            <AnimatedInput label="Email with Success" success />
            <AnimatedInput
              label="Email with Error"
              error="This email is already taken"
            />
            <SearchInput
              value={searchValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchValue(e.target.value)
              }
              onClear={() => setSearchValue("")}
            />
            <div className="flex items-center space-x-3">
              <Toggle checked={toggleValue} onChange={setToggleValue} />
              <span className="text-sm">
                Toggle is {toggleValue ? "on" : "off"}
              </span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3D Cards Section */}
      <section className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-center">
            3D Interactive Cards
          </h2>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Sparkles, title: "Botox Treatment", price: "$450" },
            { icon: Heart, title: "Facial Rejuvenation", price: "$350" },
            { icon: Star, title: "Laser Hair Removal", price: "$200" },
          ].map((service, idx) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={idx}>
                <CardContainer3D>
                  <CardBody3D>
                    <AnimatedCard clickable>
                      <CardHeader>
                        <CardItem3D translateZ={50}>
                          <Icon className="h-10 w-10 text-primary mb-2" />
                        </CardItem3D>
                        <CardItem3D translateZ={60}>
                          <CardTitle>{service.title}</CardTitle>
                        </CardItem3D>
                        <CardItem3D translateZ={50}>
                          <CardDescription>
                            Professional treatment for your beauty needs
                          </CardDescription>
                        </CardItem3D>
                      </CardHeader>
                      <CardContent>
                        <CardItem3D translateZ={70}>
                          <p className="text-2xl font-bold text-primary">
                            {service.price}
                          </p>
                        </CardItem3D>
                      </CardContent>
                    </AnimatedCard>
                  </CardBody3D>
                </CardContainer3D>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* Progress & Badges Section */}
      <section className="container mx-auto px-4 max-w-2xl">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Progress & Badges
          </h2>
          <div className="space-y-6">
            <ProgressBar value={75} showPercentage />
            <ProgressBar value={45} />
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="success">Success</Badge>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Toast Notifications Section */}
      <section className="container mx-auto px-4 max-w-2xl">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Toast Notifications
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <AnimatedButton onClick={() => handleShowToast("success")}>
              Show Success Toast
            </AnimatedButton>
            <AnimatedButton
              onClick={() => handleShowToast("error")}
              variant="destructive"
            >
              Show Error Toast
            </AnimatedButton>
            <AnimatedButton
              onClick={() => handleShowToast("info")}
              variant="outline"
            >
              Show Info Toast
            </AnimatedButton>
          </div>
        </FadeIn>
      </section>

      {/* Loading States Section */}
      <section className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Loading States
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </section>

      {/* Empty State Section */}
      <section className="container mx-auto px-4 max-w-2xl">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-center">Empty States</h2>
          <Card>
            <CardContent className="p-8">
              <EmptyState
                title="No appointments scheduled"
                description="You don't have any appointments yet. Book your first treatment to get started."
                action={{
                  label: "Book Appointment",
                  onClick: () => handleShowToast("info"),
                }}
              />
            </CardContent>
          </Card>
        </FadeIn>
      </section>

      {/* Regular Cards Grid */}
      <section className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-center">Service Cards</h2>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Hydrafacial", "Chemical Peel", "Microneedling", "LED Therapy"].map(
            (service, idx) => (
              <StaggerItem key={idx}>
                <AnimatedCard>
                  <CardHeader>
                    <CardTitle>{service}</CardTitle>
                    <CardDescription>
                      Professional treatment for radiant skin
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AnimatedButton className="w-full" size="sm">
                      Learn More
                    </AnimatedButton>
                  </CardContent>
                </AnimatedCard>
              </StaggerItem>
            )
          )}
        </StaggerContainer>
      </section>
    </div>
  );
}
