import kagglehub
import pandas as pd
import os

# Download the dataset
path = kagglehub.dataset_download("astoeckl/fake-news-dataset-german")

print("Pfad zu den Datendateien:", path)

# Dateien im Dataset-Verzeichnis auflisten
for file in os.listdir(path):
    print("Gefundene Datei:", file)

# Pfad zur richtigen CSV-Datei
csv_path = os.path.join(path, "news.csv")

# Dataset laden
df = pd.read_csv(csv_path)

# Ersten Einblick
print("\nBeispielhafte Zeilen:")
print(df.head())

# Statistiken berechnen
gesamt = len(df)
anzahl_fake = df["Fake"].sum()  # weil Fake == 1
anzahl_keinfake = gesamt - anzahl_fake
prozent_fake = (anzahl_fake / gesamt) * 100

# Ergebnisse ausgeben
print("\nStatistiken zum Datensatz:")
print(f"Gesamtanzahl der Zeilen: {gesamt}")
print(f"Anzahl der 'Fake'-Zeilen: {anzahl_fake}")
print(f"Anzahl der 'Kein Fake'-Zeilen: {anzahl_keinfake}")
print(f"Anteil 'Fake' in Prozent: {prozent_fake:.2f}%")
