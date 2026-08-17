class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # Initialize hash sets to track seen numbers
        rows: defaultdict[str, set] = defaultdict(set)
        cols: defaultdict[str, set]= defaultdict(set)
        boxes: defaultdict[str, set]= defaultdict(set)

        # Iterate through every cell on the 9x9 board
        for r in range(9):
            for c in range(9):
                val = board[r][c]

                # skip empty cells
                if val == '.':
                    continue

                # Identify which 3x3 sub-box the cell belongs to
                box_idx = (r // 3, c // 3)

                # If the value already exists in the row, column, or sub-box, it's invalid
                if (val in rows[r] or 
                    val in cols[c] or
                    val in boxes[box_idx]):
                    return False
                
                # Add the current value to the respective sets
                rows[r].add(val)
                cols[c].add(val)
                boxes[box_idx].add(val)

        return True