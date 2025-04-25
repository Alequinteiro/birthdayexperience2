
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BirthdayExperienceLandingPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold text-center">Birthday Experience 2025</h1>
      <p className="text-center text-lg text-muted-foreground">
        Um ensaio de aniversário pensado para transformar sua celebração em uma experiência visual inesquecível.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Celebração Essencial */}
        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Celebração Essencial</h2>
            <ul className="text-sm list-disc pl-4">
              <li>15 fotos editadas</li>
              <li>Até 1h de ensaio</li>
              <li>Até 2 looks</li>
              <li>Faixa e coroa inclusas</li>
              <li>Galeria online e entrega digital</li>
            </ul>
            <p className="font-semibold">R$ 467 à vista ou 4x de R$ 116,75</p>
          </CardContent>
        </Card>

        {/* Festa Glamour */}
        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Festa Glamour</h2>
            <ul className="text-sm list-disc pl-4">
              <li>20 fotos editadas</li>
              <li>Até 2h de ensaio</li>
              <li>Até 2 looks</li>
              <li>Maquiagem profissional</li>
              <li>Vela de idade</li>
              <li>Galeria online e entrega digital</li>
            </ul>
            <p className="font-semibold">R$ 637 à vista ou 4x de R$ 159,25</p>
          </CardContent>
        </Card>

        {/* Experiência Real */}
        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Experiência Real</h2>
            <ul className="text-sm list-disc pl-4">
              <li>25 fotos editadas</li>
              <li>Até 3h30 de ensaio</li>
              <li>Até 3 looks</li>
              <li>Maquiagem + babyliss</li>
              <li>Bolo, balão, bexiga, vela</li>
              <li>Reels de bastidores incluso</li>
              <li>Galeria online e entrega digital</li>
            </ul>
            <p className="font-semibold">R$ 897 à vista ou 4x de R$ 224,25</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button className="text-lg px-6 py-3">Agendar meu Ensaio</Button>
      </div>
    </div>
  );
}
