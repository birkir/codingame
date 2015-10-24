next_token = string.gmatch(io.read(), "[^%s]+")
lightX = tonumber(next_token())
lightY = tonumber(next_token())
thorX = tonumber(next_token())
thorY = tonumber(next_token())

while true do
    remainingTurns = tonumber(io.read())
    action = ""

    if thorY > lightY then
        thorY = thorY - 1
        action = action .. "N"
    end

    if thorY < lightY then
        thorY = thorY + 1
        action = action .. "S"
    end

    if thorX > lightX then
        thorX = thorX - 1
        action = action .. "W"
    end

    if thorX < lightX then
        thorX = thorX + 1
        action = action .. "E"
    end

    print(action)
end
