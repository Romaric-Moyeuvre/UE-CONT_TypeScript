directories=("account-api" "communication-api" "game-api" "match-api" "monster-api" "proxy-server")
for dir in "${directories[@]}"; do
    cd "$dir" || exit 1
    npm run dev &
    cd - || exit 1
done
wait