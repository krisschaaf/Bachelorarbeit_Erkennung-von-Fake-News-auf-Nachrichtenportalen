import pandas as pd
import os

# Pfad zu deinem Ordner mit den CSV-Dateien
ordnerpfad = "/Users/krisschaaf/Documents/Uni/Bachelorarbeit/ml_zum_erkennen_von_fake_news/Datasets/FANG-COVID_DATASET/not_preprocessed"  # z. B. "C:/Users/DeinName/Dokumente/csv_daten"

# Alle CSV-Dateien im Ordner auflisten
csv_dateien = [f for f in os.listdir(ordnerpfad) if f.endswith('.csv')]

# Liste zum Sammeln aller DataFrames
alle_dfs = []

# Jede CSV-Datei einlesen und zur Liste hinzufügen
for datei in csv_dateien:
    pfad_zur_datei = os.path.join(ordnerpfad, datei)
    df = pd.read_csv(pfad_zur_datei)
    alle_dfs.append(df)
    print(f"Geladen: {datei} mit {len(df)} Zeilen")

# Alle DataFrames zusammenführen
gesamter_df = pd.concat(alle_dfs, ignore_index=True)

# Statistik berechnen anhand der Spalte "label"
anzahl_fake = len(gesamter_df[gesamter_df["label"].str.lower() == "fake"])
anzahl_real = len(gesamter_df[gesamter_df["label"].str.lower() == "real"])
gesamt = len(gesamter_df)
prozent_fake = (anzahl_fake / gesamt) * 100 if gesamt > 0 else 0

# Ergebnisse ausgeben
print("\nStatistiken zum kombinierten Datensatz:")
print(f"Gesamte Anzahl Zeilen: {gesamt}")
print(f"Anzahl 'fake'-Zeilen: {anzahl_fake}")
print(f"Anzahl 'real'-Zeilen: {anzahl_real}")
print(f"Anteil 'fake' in Prozent: {prozent_fake:.2f}%")
