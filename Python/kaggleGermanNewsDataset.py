import kagglehub
import pandas as pd
import os

# Download latest version
path = kagglehub.dataset_download("pqbsbk/german-news-dataset")

print("Pfad zu den Datendateien:", path)

# Dateien im Dataset-Verzeichnis auflisten
for file in os.listdir(path):
    print("Gefundene Datei:", file)

# Pfad zur richtigen CSV-Datei
csv_path = os.path.join(path, "data.csv")

# Dataset laden
df = pd.read_csv(csv_path)

# Ersten Einblick
print("\nBeispielhafte Zeilen:")
print(df.head())

# Statistiken berechnen
gesamt = len(df)

# Ergebnisse ausgeben
print("\nStatistiken zum Datensatz:")
print(f"Gesamtanzahl der Zeilen: {gesamt}")

# Einzigartige Quellen analysieren
print("\nEinzigartige Quellen (source):")
print(df['source'].value_counts())
