import { useState, useEffect } from "react";
import { Globe, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "es", name: "Spanish", nativeName: "Español" },
  { code: "fr", name: "French", nativeName: "Français" },
  { code: "de", name: "German", nativeName: "Deutsch" },
  { code: "it", name: "Italian", nativeName: "Italiano" },
  { code: "pt", name: "Portuguese", nativeName: "Português" },
  { code: "ja", name: "Japanese", nativeName: "日本語" },
  { code: "ko", name: "Korean", nativeName: "한국어" },
  { code: "zh", name: "Chinese", nativeName: "中文" },
  { code: "ar", name: "Arabic", nativeName: "العربية" },
  { code: "ru", name: "Russian", nativeName: "Русский" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "or", name: "Odia", nativeName: "ଓଡ଼ିଆ" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
  { code: "ur", name: "Urdu", nativeName: "اردو" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
];

interface LanguageTranslatorProps {
  content: any;
  onTranslate: (translatedContent: any) => void;
}

const LanguageTranslator = ({ content, onTranslate }: LanguageTranslatorProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [isTranslating, setIsTranslating] = useState(false);
  const [translatedContent, setTranslatedContent] = useState<any>(null);

  const translateText = async (text: string, targetLanguage: string): Promise<string> => {
    if (!text || targetLanguage === "en") return text;
    if (text.length > 400) {
    // Split into sentences and translate each
    const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [text];
    const translatedSentences = [];
    for (const sentence of sentences) {
      translatedSentences.push(await translateText(sentence, targetLanguage));
    }
    return translatedSentences.join(" ");
  }
    
    try {
      // Using a free translation API (MyMemory)
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLanguage}`
      );
      const data = await response.json();
      
      if (data.responseStatus === 200) {
        return data.responseData.translatedText;
      }
      return text;
    } catch (error) {
      console.error("Translation error:", error);
      return text;
    }
  };

  const translateContentRecursively = async (obj: any, targetLanguage: string): Promise<any> => {
    if (typeof obj === 'string') {
      return await translateText(obj, targetLanguage);
    }
    
    if (Array.isArray(obj)) {
      const translatedArray = [];
      for (const item of obj) {
        translatedArray.push(await translateContentRecursively(item, targetLanguage));
      }
      return translatedArray;
    }
    
    if (typeof obj === 'object' && obj !== null) {
      const translatedObj: any = {};
      for (const [key, value] of Object.entries(obj)) {
        translatedObj[key] = await translateContentRecursively(value, targetLanguage);
      }
      return translatedObj;
    }
    
    return obj;
  };

  const handleTranslate = async () => {
    if (selectedLanguage === "en") {
      setTranslatedContent(content);
      onTranslate(content);
      return;
    }

    setIsTranslating(true);
    try {
      const translated = await translateContentRecursively(content, selectedLanguage);
      setTranslatedContent(translated);
      onTranslate(translated);
    } catch (error) {
      console.error("Translation failed:", error);
    } finally {
      setIsTranslating(false);
    }
  };

  useEffect(() => {
    if (selectedLanguage === "en") {
      setTranslatedContent(content);
      onTranslate(content);
    }
  }, [selectedLanguage, content, onTranslate]);

  return (
    <Card className="mb-6 shadow-card">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-accent" />
            <span className="font-medium text-sm">Translate to:</span>
          </div>
          
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {LANGUAGES.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  <div className="flex items-center gap-2">
                    <span>{lang.nativeName}</span>
                    <span className="text-xs text-muted-foreground">({lang.name})</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedLanguage !== "en" && (
            <Button 
              onClick={handleTranslate} 
              disabled={isTranslating}
              size="sm"
              className="bg-gradient-nature hover:opacity-90"
            >
              {isTranslating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Translating...
                </>
              ) : (
                "Translate"
              )}
            </Button>
          )}
        </div>
        
        {selectedLanguage !== "en" && (
          <p className="text-xs text-muted-foreground mt-2">
            Translation powered by MyMemory. Results may vary in accuracy.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default LanguageTranslator;