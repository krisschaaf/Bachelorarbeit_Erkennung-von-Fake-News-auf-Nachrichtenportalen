# LightGBM

**LogLoss** ist eine Verlustfunktion, die nicht nur bewertet, ob die Vorhersage korrekt war, sondern auch, wie sicher das Modell war. Vorhersagen, die mit hoher Sicherheit falsch sind, werden besonders stark bestraft. Dadurch eignet sich Logloss gut für binäre Klassifikationsaufgaben mit Wahrscheinlichkeitsausgabe und dient gleichzeitig als zuverlässiges Kriterium für das automatische Beenden des Trainingsprozesses zur Vermeidung von Überanpassung (\textit{Overfitting}).
