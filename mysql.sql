SELECT
    'January' AS Month,
    31 AS Days
UNION ALL
SELECT
    'February',
    CASE
        WHEN YEAR(NOW()) % 4 = 0 AND (YEAR(NOW()) % 100 != 0 OR YEAR(NOW()) % 400 = 0) THEN 29
        ELSE 28
END
UNION ALL
SELECT 'March', 31
UNION ALL
SELECT 'April', 30
UNION ALL
SELECT 'May', 31
UNION ALL
SELECT 'June', 30
UNION ALL
SELECT 'July', 31
UNION ALL
SELECT 'August', 31
UNION ALL
SELECT 'September', 30
UNION ALL
SELECT 'October', 31
UNION ALL
SELECT 'November', 30
UNION ALL
SELECT 'December', 31;