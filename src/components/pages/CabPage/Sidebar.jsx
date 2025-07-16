"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"; // Make sure this path is correct for your Button

export default function FilterSidebar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    seater: [],
    cabType: [],
    fuelType: [],
  });

  const updateFilter = (type, value) => {
    setFilters((prev) => {
      const current = prev[type];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];

      const newFilters = { ...prev, [type]: updated };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleResetFilters = () => {
    const emptyFilters = {
      seater: [],
      cabType: [],
      fuelType: [],
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  const cabTypes = ["Hatchback", "SUV", "Sedan", "Traveller"];
  const fuelTypes = ["Petrol", "Diesel", "Electric", "CNG"];

  return (
    <aside className="w-full md:w-64 bg-white border-r p-4 space-y-6">
      <h2 className="text-xl font-bold">Filters</h2>

      {/* Cab Type Filter */}
      <div>
        <h3 className="text-md font-semibold mb-2">Cab Type</h3>
        <div className="space-y-2">
          {cabTypes.map((type) => (
            <div key={type} className="flex items-center gap-2">
              <Checkbox
                id={type}
                checked={filters.cabType.includes(type)}
                onCheckedChange={() => updateFilter("cabType", type)}
              />
              <Label htmlFor={type} className="text-sm">
                {type}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Fuel Type Filter */}
      <div>
        <h3 className="text-md font-semibold mb-2">Fuel Type</h3>
        <div className="space-y-2">
          {fuelTypes.map((fuel) => (
            <div key={fuel} className="flex items-center gap-2">
              <Checkbox
                id={fuel}
                checked={filters.fuelType.includes(fuel)}
                onCheckedChange={() => updateFilter("fuelType", fuel)}
              />
              <Label htmlFor={fuel} className="text-sm">
                {fuel}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Reset Filters Button */}
      <div>
        <Button
          variant="gradient"
          className="w-full mt-4 text-sm"
          onClick={handleResetFilters}
        >
          Clear All Filters
        </Button>
      </div>
    </aside>
  );
}
