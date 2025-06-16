lgb_clf = lgb.LGBMClassifier(objective='binary',
                             metric='binary_logloss',
                             n_estimators=1000, # Number of boosting rounds
                             learning_rate=0.05,
                             num_leaves=31,
                             max_depth=-1,
                             random_state=42,
                             n_jobs=-1, # Use all available cores
                             colsample_bytree=0.8,
                             subsample=0.8,
                             reg_alpha=0.1,
                             reg_lambda=0.1)

Evaluating LightGBM model on test embeddings...
LightGBM Accuracy: 0.9757
LightGBM F1 Score: 0.9685
LightGBM Precision: 0.9755
LightGBM Recall: 0.9615


lgb_clf = lgb.LGBMClassifier(objective='binary',
                             metric='binary_logloss',
                             n_estimators=3000, # Number of boosting rounds
                             learning_rate=0.005,
                             num_leaves=31,
                             max_depth=-1,
                             random_state=42,
                             n_jobs=-1, # Use all available cores
                             colsample_bytree=0.8,
                             subsample=0.8,
                             reg_alpha=0.1,
                             reg_lambda=0.1)


Evaluating LightGBM model on test embeddings...
LightGBM Accuracy: 0.9757
LightGBM F1 Score: 0.9685
LightGBM Precision: 0.9744
LightGBM Recall: 0.9627

lgb_clf = lgb.LGBMClassifier(objective='binary',
                             metric='binary_logloss',
                             n_estimators=500, # Number of boosting rounds
                             learning_rate=0.1,
                             num_leaves=31,
                             max_depth=-1,
                             random_state=42,
                             n_jobs=-1, # Use all available cores
                             colsample_bytree=0.8,
                             subsample=0.8,
                             reg_alpha=0.1,
                             reg_lambda=0.1)

Evaluating LightGBM model on test embeddings...
LightGBM Accuracy: 0.9756
LightGBM F1 Score: 0.9683
LightGBM Precision: 0.9755
LightGBM Recall: 0.9613

lgb_clf = lgb.LGBMClassifier(objective='binary',
                             metric='binary_logloss',
                             n_estimators=1000, # Number of boosting rounds
                             learning_rate=0.05,
                             num_leaves=63,
                             max_depth=-1,
                             random_state=42,
                             n_jobs=-1, # Use all available cores
                             colsample_bytree=0.8,
                             subsample=0.8,
                             reg_alpha=0.1,
                             reg_lambda=0.1)

Evaluating LightGBM model on test embeddings...
LightGBM Accuracy: 0.9753
LightGBM F1 Score: 0.9679
LightGBM Precision: 0.9744
LightGBM Recall: 0.9615

lgb_clf = lgb.LGBMClassifier(objective='binary',
                             metric='binary_logloss',
                             n_estimators=1000, # Number of boosting rounds
                             learning_rate=0.05,
                             num_leaves=255,
                             max_depth=-1,
                             random_state=42,
                             n_jobs=-1, # Use all available cores
                             colsample_bytree=0.8,
                             subsample=0.8,
                             reg_alpha=0.1,
                             reg_lambda=0.1)

Evaluating LightGBM model on test embeddings...
LightGBM Accuracy: 0.9745
LightGBM F1 Score: 0.9669
LightGBM Precision: 0.9738
LightGBM Recall: 0.9601


lgb_clf = lgb.LGBMClassifier(objective='binary',
                             metric='binary_logloss',
                             n_estimators=1000, # Number of boosting rounds
                             learning_rate=0.05,
                             num_leaves=31,
                             max_depth=12,
                             random_state=42,
                             n_jobs=-1, # Use all available cores
                             colsample_bytree=0.8,
                             subsample=0.8,
                             reg_alpha=0.1,
                             reg_lambda=0.1)

Evaluating LightGBM model on test embeddings...
LightGBM Accuracy: 0.9758
LightGBM F1 Score: 0.9686
LightGBM Precision: 0.9755
LightGBM Recall: 0.9618

lgb_clf = lgb.LGBMClassifier(objective='binary',
                             metric='binary_logloss',
                             n_estimators=1000, # Number of boosting rounds
                             learning_rate=0.05,
                             num_leaves=31,
                             max_depth=12,
                             random_state=42,
                             min_child_samples=100,
                             n_jobs=-1, # Use all available cores
                             colsample_bytree=0.8,
                             subsample=0.8,
                             reg_alpha=0.1,
                             reg_lambda=0.1)

Evaluating LightGBM model on test embeddings...
LightGBM Accuracy: 0.9758
LightGBM F1 Score: 0.9686
LightGBM Precision: 0.9752
LightGBM Recall: 0.9621

lgb_clf = lgb.LGBMClassifier(objective='binary',
                             metric='binary_logloss',
                             n_estimators=1000, # Number of boosting rounds
                             learning_rate=0.05,
                             num_leaves=31,
                             max_depth=12,
                             random_state=42,
                             min_child_samples=100,
                             n_jobs=-1, # Use all available cores
                             colsample_bytree=0.8,
                             subsample=0.6,
                             reg_alpha=0,
                             reg_lambda=0)

Evaluating LightGBM model on test embeddings...
LightGBM Accuracy: 0.9756
LightGBM F1 Score: 0.9684
LightGBM Precision: 0.9739
LightGBM Recall: 0.9630

lgb_clf = lgb.LGBMClassifier(objective='binary',
                             metric='binary_logloss',
                             n_estimators=1000, # Number of boosting rounds
                             learning_rate=0.05,
                             num_leaves=31,
                             max_depth=12,
                             random_state=42,
                             min_child_samples=100,
                             n_jobs=-1, # Use all available cores
                             colsample_bytree=0.8,
                             subsample=0.6,
                             reg_alpha=1.0,
                             reg_lambda=1.0)

Evaluating LightGBM model on test embeddings...
LightGBM Accuracy: 0.9748
LightGBM F1 Score: 0.9674
LightGBM Precision: 0.9738
LightGBM Recall: 0.9610

lgb_clf = lgb.LGBMClassifier(objective='binary',
                             metric='binary_logloss',
                             n_estimators=1000, # Number of boosting rounds
                             learning_rate=0.05,
                             num_leaves=31,
                             max_depth=12,
                             random_state=42,
                             min_child_samples=100,
                             n_jobs=-1, # Use all available cores
                             colsample_bytree=0.8,
                             subsample=0.6,
                             reg_alpha=0,
                             reg_lambda=1.0)

Evaluating LightGBM model on test embeddings...
LightGBM Accuracy: 0.9756
LightGBM F1 Score: 0.9683
LightGBM Precision: 0.9760
LightGBM Recall: 0.9607

lgb_clf = lgb.LGBMClassifier(objective='binary',
                             metric='binary_logloss',
                             n_estimators=1000, # Number of boosting rounds
                             learning_rate=0.05,
                             num_leaves=31,
                             max_depth=12,
                             random_state=42,
                             min_child_samples=100,
                             n_jobs=-1, # Use all available cores
                             colsample_bytree=0.8,
                             subsample=0.6,
                             reg_alpha=1.0,
                             reg_lambda=0)
                             
Evaluating LightGBM model on test embeddings...
LightGBM Accuracy: 0.9757
LightGBM F1 Score: 0.9685
LightGBM Precision: 0.9752
LightGBM Recall: 0.9618