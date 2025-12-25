import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import PlantCard from "@/components/PlantCard";
import plantsData from "@/data/plantsData.json";

const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamValue = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(searchParamValue);
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [visibleCount, setVisibleCount] = useState(6);
  const [filteredPlants, setFilteredPlants] = useState(plantsData);

  // Keep searchQuery in sync with URL param
  useEffect(() => {
    setSearchQuery(searchParamValue);
  }, [searchParamValue]);

  // Filter and search plants
  useEffect(() => {
    let filtered = plantsData;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(plant =>
        plant.common_name.toLowerCase().includes(query) ||
        plant.scientific_name.toLowerCase().includes(query) ||
        plant.family.toLowerCase().includes(query) ||
        plant.type.toLowerCase().includes(query) ||
        plant.native_region.toLowerCase().includes(query)
      );
    }

    // Type filter
    if (typeFilter !== "all") {
      filtered = filtered.filter(plant =>
        plant.type.toLowerCase() === typeFilter.toLowerCase()
      );
    }

    // Sort plants
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.common_name.localeCompare(b.common_name);
        case "scientific":
          return a.scientific_name.localeCompare(b.scientific_name);
        case "type":
          return a.type.localeCompare(b.type);
        case "family":
          return a.family.localeCompare(b.family);
        default:
          return 0;
      }
    });

    setFilteredPlants(filtered);
  }, [searchQuery, typeFilter, sortBy]);

  // Update search params when search changes
  useEffect(() => {
    if (searchQuery.trim()) {
      setSearchParams({ search: searchQuery });
    } else {
      setSearchParams({});
    }
  }, [searchQuery, setSearchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const visiblePlants = filteredPlants.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPlants.length;

  // Get unique plant types for filter
  const plantTypes = Array.from(new Set(plantsData.map(plant => plant.type)));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-nature bg-clip-text text-transparent">
            Plant Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse our comprehensive collection of plants. Use the search and filters 
            to find exactly what you're looking for.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-card">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <form onSubmit={handleSearch} className="flex-1 w-full lg:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search plants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </form>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {plantTypes.map(type => (
                    <SelectItem key={type} value={type.toLowerCase()}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Common Name</SelectItem>
                  <SelectItem value="scientific">Scientific Name</SelectItem>
                  <SelectItem value="type">Plant Type</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex rounded-md border">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {visiblePlants.length} of {filteredPlants.length} plants
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Plants Grid/List */}
        {filteredPlants.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No plants found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setTypeFilter("all");
              }}
            >
              Clear all filters
            </Button>
          </div>
        ) : (
          <>
            <div className={`grid gap-6 mb-8 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {visiblePlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center">
                <Button
                  onClick={loadMore}
                  size="lg"
                  className="bg-gradient-nature hover:opacity-90"
                >
                  Load More Plants
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;